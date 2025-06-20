import {getQueueMessages, markMessageAsProcessed} from "@/core/Queue";
import {QueueMessage} from "@/model/queue/QueueMessage";
import {refreshDiscordRoles} from "@/core/Player";
import {QueueMessageID} from "@/model/queue/QueueMessageID";

class QueueProcessor {
  private running: boolean = false;
  private workers: {[messageID: QueueMessageID]: Promise<any>} = {};

  async wake() {
    if (this.running) return;
    this.running = true;
    try {
      const messages = await getQueueMessages();
      for (const messageID of Object.keys(messages)) {
        if (this.workers[messageID] === undefined) {
          this.workers[messageID] = this.processMessage(messages[messageID])
            .then(async () => {
              await markMessageAsProcessed(messageID)
              delete this.workers[messageID];
            }).catch(() => setTimeout(() => {
              delete this.workers[messageID];
              this.wake();
            }, 5000));
        }
      }
    } finally {
      this.running = false;
    }
  }

  async processMessage(message: QueueMessage) {
    switch (message.type) {
      case "refresh-discord-roles": return refreshDiscordRoles(message.data.userID);
    }
  }
}

export const queueProcessor = new QueueProcessor();
