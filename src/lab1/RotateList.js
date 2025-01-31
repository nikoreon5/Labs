/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) return head;
    // находим длину списка
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    // чтобы делать меньше итераций
    k = k % length;
    if (k === 0) return head;
    // чтобы список был циклическим
    tail.next = head;
    // находим новые хвост и голову
    let newTailIndex = length - k - 1;
    let newTail = head;
    for (let i = 0; i < newTailIndex; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    // разрываем цикл
    newTail.next = null;
    return newHead;
};