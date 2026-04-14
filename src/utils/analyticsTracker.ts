export interface TelemetryEvent {
  eventName: string;
  timestamp: number;
  properties?: Record<string, string | number | boolean>;
}

export function createTelemetryQueue(maxQueueSize: number = 20) {
  const queue: TelemetryEvent[] = [];

  return {
    track(eventName: string, properties?: Record<string, string | number | boolean>) {
      if (queue.length >= maxQueueSize) {
        queue.shift(); // Evict oldest
      }
      queue.push({
        eventName,
        timestamp: Date.now(),
        properties
      });
    },
    getEvents(): TelemetryEvent[] {
      return [...queue];
    },
    clear() {
      queue.length = 0;
    }
  };
}
