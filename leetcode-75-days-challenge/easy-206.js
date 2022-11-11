/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let nxt = null;
    while (head !== null){
        nxt = head.next;
        head.next = prev;
        prev = head;
        head = nxt;
    }
    return prev;
};