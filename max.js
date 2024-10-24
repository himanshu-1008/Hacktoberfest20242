//Javascript program to find the maximum sum
// after rearranging the array for K queries
 
 
 
//function to sort a array
function arrSort(a, n) {
   var i, j, min, temp;
   for (i = 0; i < n - 1; i++) {
      min = i;
      for (j = i + 1; j < n; j++)
      if (a[j] < a[min])
      min = j;
      temp = a[i];
      a[i] = a[min];
      a[min] = temp;
   }
}
 
// Function to find maximum sum after
// rearranging array elements
function maxSumArrangement(A, R, N, M)
{
 
    // Auxiliary array to find the
    // count of each selected elements
    var count = new Array(N);
 
    // Initialize with 0
    count.fill(0);
 
    // Finding count of every element
    // to be selected
    for (var i = 0; i < M; i++) {
 
        var l = R[i][0], r = R[i][1] + 1;
 
        // Making it to 0-indexing
        l--;
        r--;
 
        // Prefix sum array concept is used
        // to obtain the count array
        count[l]++;
 
        if (r < N)
            count[r]--;
    }
 
    // Iterating over the count array
    // to get the final array
    for (var i = 1; i < N; ++i) {
        count[i] += count[i - 1];
    }
 
    // Variable to store the maximum sum
    var ans = 0;
 
    // Sorting both the arrays
    count.sort();
    arrSort(A,N);
 
    // Loop to find the maximum sum
    for (var i = N - 1; i >= 0; --i) {
        ans += A[i] * count[i];
    }
 
    return ans;
}
 
var A = [ 2, 6, 10, 1, 5, 6 ];
var R = [ [ 1, 3 ], [ 4, 6 ], [ 3, 4 ] ];
var N = A.length;
var M = R.length;
document.write( maxSumArrangement(A, R, N, M));
