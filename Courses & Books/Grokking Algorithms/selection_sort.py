# Arrays store elements right next to each other
# Linked lists store elements all over - one element stores the address of the next one

# Run Times for Common Operations of Arrays and Lists
#   - Array Reading:    O(1)
#   - Array Insertion:  O(n)
#   - Array Deletion:   O(n)
#   - List Reading:     O(n)
#   - List Insertion:   O(1)
#   - List Deletion:    O(1)

# Insertion Example: adding to the middle of a list
#   - Array ->  Shift the rest of the elements down
#   - List  ->  Simply change what the previous element points to

# Deletion Example
#   - Array ->  This time, shift everything up
#   - List  ->  Same as insertion, change what previous element points to

# Insertion and Deletion are only O(1) if you have can access the element to be deleted
# Common practice is to keep track of first and last items in a linked list 

# Which are used more? Depends on use case but usually arrays because of random access
#   - Random Access: jump directly to any element - this is why arrays are faster at reads
#   - Sequential Access: reading elements one by one, starting at 1st element

# Main takeaway for arrays vs lists:
#   - Arrays allow for faster reads
#   - Lists allow for faster inserts and deletes

# Selection Sort Example Problem: sort music from most to least played 
#   - One solution is to go through list, find the most played song, add it to a new list - repeat until no more songs
#   - This operation takes O(n^2), simple search to look at each artist once is O(n), however, you have to do this n times
#   - There are more effective algorithms for this problem such as quick sort

# Selection Sort Implementation 
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

print(selectionSort([5, 3, 6, 2, 10]))
