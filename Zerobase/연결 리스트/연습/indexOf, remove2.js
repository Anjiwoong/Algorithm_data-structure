// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node !== null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }

  console.log('null');
};

// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) return false;

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }

  this.length++;

  return true;
};

// removeAt(): position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) return null;

  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

// indexOf(): value 값을 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function (value) {
  let current = this.head;
  let index = 0;

  while (current !== null) {
    if (current.data === value) return index;

    index++;
    current = current.next;
  }

  return -1;
};

// remove2(): indexOf + removeAt = remove
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.indexOf(1000));
console.log(ll.indexOf(1));
console.log(ll.indexOf(100));
console.log(ll.indexOf(10));

console.log(ll.remove2(1000));
ll.printNode();
console.log(ll.remove2(1));
ll.printNode();
console.log(ll.remove2(2));
ll.printNode();
console.log(ll.remove2(100));
ll.printNode();

console.log(ll.size());
