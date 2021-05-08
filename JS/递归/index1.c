#include <stdio.h>
int mul(n){
  if (n == 1)
    return 1;
  return n*mul(n-1);
}

int main(){
  int num=mul(5);
  printf("%d", num);
}