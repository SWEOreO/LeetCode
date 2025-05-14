// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Need to know
// cur.next is a javascript linked list, if it is the last node, cur.next will be null
// when cur change, head also change, since both of them point to the same linked list
// in this case, head is not an array, it's a linked list, a list node.

// Solution 1

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
var deleteDuplicates = function(head) {

  if (!head) return head;

  let cur = head;

  while (cur != null && cur.next != null ) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;    
};