//here i am adding at last in a linked list and counting the number of nodes and printing the linked list
#include <iostream>
using namespace std;
struct node {
    int data ;
    node* next;
};

node* head = NULL;

void InsertAtLast(int num){
  node* temp = new node();
  temp->data = num;
  temp->next = NULL;

  if(head == NULL){
      head = temp;
  }

  node* temp2 = head;
  while(temp2 !=NULL){
      temp2 = temp2->next;
  }

  temp2->next = temp;
};

void InsertHead(int num){
    node* temp = new node();
    temp->data - num;
    temp->next = NULL;

    if(head == NULL){
        head = temp;
    }

    temp->next = head;
    head = temp;
}

int Count(){
    int num = 0;
    node* temp = head;
    if(head == NULL){
        return 0;
    }
    else {
       while(temp != NULL){
           num++;
           temp= temp->next;
           
       }
    }

    return num;
}
int main() {
    InsertHead(5);
    InsertHead(4);
    InsertHead(3);
    InsertHead(2);
    InsertHead(1);
    int num = Count();
    cout<<"Number of nodes =" << num << endl;
}
