
public interface Calculator {
	default void print() {
		System.out.println("This is Default");
	}
	public int square(int num);
}
