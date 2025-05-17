type Task = () => void;

class Item {
  constructor(
    public data: Task,
    public next: Item | null = null,
  ) {}
}

class Queue {
  private head: Item | null = null;
  private tail: Item | null = null;

  peekFront() {
    return this.head?.data;
  }
  enqueue(item: Item) {
    if (this.head && this.tail) {
      this.tail.next = item;
      this.tail = item;
    } else {
      this.head = this.tail = item;
    }
  }
  dequeue() {
    if (!this.head) {
      return null;
    }

    const currentHeadData = this.head.data;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return currentHeadData;
  }
}

class EventQueue {
  constructor(public eventList: Record<string, Queue> = {}) {}

  private eventExists(eventName: string) {
    return this.eventList[eventName] !== undefined;
  }
  push(eventName: string, task: Task) {
    const item = new Item(task);

    if (this.eventExists(eventName)) {
      this.eventList[eventName].enqueue(item);
    } else {
      const queue = new Queue();
      queue.enqueue(item);
      this.eventList[eventName] = queue;
    }
  }
  dispatch(eventName: string) {
    if (!this.eventExists(eventName)) {
      console.log('Event is none!');

      return;
    }

    const event = this.eventList[eventName];
    const task = event.dequeue();

    if (!task) {
      return;
    }

    task();

    if (!event.peekFront()) {
      delete this.eventList[eventName];
    }
  }
}

const math = () => console.log('You will study math today');
const music = () => console.log('You will study music today');
const squat = () => console.log('You will work out squat 6 times today');
const pushUp = () => console.log('You will work out squat 20 Push-up today');

const myEventQueueSystem = new EventQueue();
myEventQueueSystem.push('Study', math);
myEventQueueSystem.push('Study', music);
myEventQueueSystem.push('WorkOut', squat);
myEventQueueSystem.push('WorkOut', pushUp);

myEventQueueSystem.dispatch('Study');
myEventQueueSystem.dispatch('Study');
myEventQueueSystem.dispatch('Study');
myEventQueueSystem.dispatch('WorkOut');
myEventQueueSystem.dispatch('WorkOut');
myEventQueueSystem.dispatch('Something');
