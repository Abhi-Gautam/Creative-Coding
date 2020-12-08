#include<iostream>
#include<srand>
using namespace std;

int main(){
    int n1, n2;
    cout<<"Enter the first number\n";
    cout<<random()
    cout<<"Enter the second number\n";
    int mult, add, sub;
    float div;
    mult = n1*n2;
    add = n1+n2;
    sub = abs(n1-n2);
    div = 1.0*n2/n1;
    cout<<"Multplication: "<<mult<<endl;
    cout<<"Division: "<<div<<endl;
    cout<<"Addition: "<<add<<endl;
    cout<<"Substration: "<<sub<<endl;
    return 0;
}