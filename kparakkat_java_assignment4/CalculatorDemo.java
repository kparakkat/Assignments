
public class CalculatorDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator c1= num -> (num*num);
		int s = c1.square(5);
		System.out.println(s);
		c1.print();
	}
}
