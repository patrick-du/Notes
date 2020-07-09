# Divide-and-conquer (D&C) is a recursive algorithm
# To solve a problem using D&C:
#   - Figure out base case
#   - Divide or decrease problem until it becomes the base case

# Exercise 4.1: Recursive Implementation of Sum Function
def recursive_sum(arr):
    if arr == []:
        return 0
    return arr[0] + recursive_sum(arr[1:])

print(recursive_sum([1, 2, 3]))

# Exercise 4.2: Recursive Implementation of Counting Down Number of Items in a List
def recursive_countdown(arr):
    if arr == []:
        print("0 items")
        return
    print("{0} items".format(len(arr)))
    return recursive_countdown(arr[1:])

print(recursive_countdown(["item1", "item2", "item3", "item4", "item5"]))

# Exercise 4.3: Recursive Implementation of Maximum Number in a List
def recursive_max(arr, max):
    if arr == []:
        return max
    if arr[0] > max:
        max = arr[0]
    return recursive_max(arr[1:], max)

print(recursive_max([1, 2, 3, 5, 10, 9], 0))

# Exercise 4.4: Recursive Implementation of Binary Search
def recursive_binary_search(arr, val, low, high):
    if high >= low:
        mid = (low + high) // 2        
        if arr[mid] == val:
            return mid
        elif arr[mid] > val:
            return recursive_binary_search(arr, val, low, mid-1)
        else:
            return recursive_binary_search(arr, val, mid+1, high)
    else:
        return None

arr = [2, 3, 4, 10, 40] 
print(recursive_binary_search(arr, 10, 0, len(arr)-1))
print(recursive_binary_search(arr, -1, 0, len(arr)-1))

# Quicksort is a sorting algorithm that uses divide-and-conquer - on average, O(n * log n), but worse case is O(n^2)
#   - Pick a pivot element from the array
#   - Partition array into 2 sub-arrays: elements < pivot & elements > pivot
#   - Call quicksort recursively onto the two sub-arrays

# Quicksort Implementation
def quicksort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = []
        greater = []
        for i in array[1:]:
            if i <= pivot:
                less.append(i)
            else:
                greater.append(i)
        return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([10, 5, 2, 3]))

# If you choose a random element in the array as the pivot, on average, quicksort will complete in O(n log n)
