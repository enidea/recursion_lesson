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

  peekFront = () => this.head?.data;
  enqueue = (item: Item) => {
    if (this.head && this.tail) {
      this.tail.next = item;
      this.tail = item;
    } else {
      this.head = this.tail = item;
    }
  };
  dequeue = () => {
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
  };
}

class TaskQueue {
  constructor(public queue: Queue = new Queue()) {}

  push = (task: Task) => this.queue.enqueue(new Item(task));
  taskExists = () => this.queue.peekFront() !== undefined;
  run = () => {
    const task = this.queue.dequeue();

    if (task) {
      task();
    }
  };
}

const firstTask = () => console.log('Running the first function!!!');
const secondTask = () => console.log('Running the second function~~~');
const thirdTask = () => console.log('Running the third function>>>');
const fourthTask = () => console.log('Running the fourth function<<<');

const scheduler = new TaskQueue();
scheduler.push(firstTask);
scheduler.push(secondTask);
scheduler.push(thirdTask);
scheduler.push(fourthTask);

while (scheduler.taskExists()) {
  scheduler.run();
}
