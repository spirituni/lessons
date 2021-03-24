#include <iostream>
#include <cmath>

using namespace std;

int main() {

  // bool
  cout << "\n-- booleans --" << endl;

  bool isHot = true;
  bool isSheep = true;
  bool isFire = false;

  bool isBonfire = isHot && (isSheep || isFire);  // bonfire is hot and is either a sheep or fire
  bool isBaba = !isBonfire;                       // baba is not bonfire

  cout << "is it hot?\t" << isHot << endl;
  cout << "is it sheep?\t" << isSheep << endl;
  cout << "is it fire?\t" << isFire << endl;
  cout << "is it bonfire?\t" << isBonfire << endl;
  cout << "is it baba?\t" << isBaba << endl;

  // int
  cout << "\n-- integers --" << endl;

  int a = 1;
  int b = 2;
  int c = 5;
  int d = 10;

  int add = 1+1;
  cout << "1 + 1 = " << add << endl;
  add = a+b;                                        // 1 + 2
  cout << a << " + " << b << " = " << add << endl;

  int sub = 1-1;
  cout << "1 - 1 = " << sub << endl;
  sub = b-a;                                        // 2 - 1
  cout << b << " - " << a << " = " << sub << endl;

  int mult = 1*1;
  cout << "1 * 1 = " << mult << endl;
  mult = a*b;                                       // 1 * 2
  cout << a << " * " << b << " = " << mult << endl;

  int div = 1/1;
  cout << "1 / 1 = " << div << endl;
  div = d/c;                                       // 10 / 5
  cout << d << " / " << c << " = " << div << endl;
  div = c/d;                                       // 5 / 10
  cout << c << " / " << d << " = " << div << endl;

  // double
  cout << "\n-- doubles --" << endl;

  double w = 1;
  double x = 3;
  double y = 5;
  double z = 10;

  double doubDivInt = y/d;                      // (double) 5 / (int) 10
  cout << y << " / " << d << " = " << doubDivInt << "\t(double divided by int)" << endl;
  double intDivDoub = a/x;                      // (int) 1 / (double) 3
  cout << a << " / " << x << " = " << intDivDoub << "(int divided by double)" <<  endl;
  double doubDivDoub = w/z;                     // (double) 1 / (double) 10
  cout << w << " / " << z << " = " << doubDivDoub << "\t(double divided by double)" <<  endl;
  double rounded = round(intDivDoub * 100) / 100;
  cout << a << " / " << x << " = " << rounded << "\t(rounded to 2 decimal places)" << endl;
  double floored = floor(intDivDoub);
  cout << a << " / " << x << " = " << floored << "\t(floored)" << endl;
  double ceiled = ceil(intDivDoub);
  cout << a << " / " << x << " = " << ceiled << "\t(ceiled)" << endl;
  double squareRoot = sqrt(100.0);
  cout << "√100 = " << squareRoot << "\t(square rooted double)" << endl;

  // char
  cout << "\n-- characters --" << endl;

  char left = '<';
  char right = '>';
  char eye = '\'';
  char mouth = '^';

  cout << "aki: " << left << eye << mouth << eye << right << endl;

  // string
  cout << "\n-- strings --" << endl;

  string name = "aki";
  string sheep = "🐑";
  string fire = "🔥";
  string greeting = "hello my name is " + name + "!";
  string quote = "\"" + greeting + "\"";
  string tab = "\t";
  string newLine = "\n";


  cout << "name: " << name << endl;
  cout << "bonfire: " << sheep << " or " << fire << endl;
  cout << greeting << endl;
  cout << quote << endl;
  cout << "here's a tab:" << tab << "and this goes to the next line:" << newLine;

  // type casting
  cout << "\n-- type casting --" << endl;

  // int <-> double
  double intToDoub = (double) 1;
  int doubToInt = (int) 1.25;

  cout << "intToDoub:\t" << typeid(intToDoub).name() << " (explicit casting)" << endl;
  cout << "doubToInt:\t" << typeid(doubToInt).name() << " (explicit casting)" << endl;

  intToDoub = 1;
  doubToInt = 1.25;

  cout << "intToDoub:\t" << typeid(intToDoub).name() << " (implicit casting)" << endl;
  cout << "doubToInt:\t" << typeid(doubToInt).name() << " (implicit casting)" << endl;
  cout << endl;

  // char <-> int
  char intToChar = (char) 97;   // lowercase 'a'
  int charToInt = (int) 'a';    // 97

  cout << "intToChar (" << intToChar << "):\t" << typeid(intToChar).name() << " (explicit casting)" << endl;
  cout << "charToInt (" << charToInt << "):\t" << typeid(charToInt).name() << " (explicit casting)" << endl;

  intToChar = 65;               // uppercase 'A'
  charToInt = 'A';              // 65

  cout << "intToChar (" << intToChar << "):\t" << typeid(intToChar).name() << " (implicit casting)" << endl;
  cout << "charToInt (" << charToInt << "):\t" << typeid(charToInt).name() << " (implicit casting)" << endl;

}