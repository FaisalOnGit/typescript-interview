// 1. Deklarasi Variabel dengan Tipe
let age: number = 30;
let nama: string = "Faisal";
let isEmployed: boolean = true;

console.log(`Name: ${nama}, Age: ${age}, Employed: ${isEmployed}`);

// 2. Array dan Tuple
let scores: number[] = [90, 85, 88];
let user: [number, string] = [1, "Faisal"]; // Tuple dengan id (number) dan nama (string)

console.log("Scores:", scores);
console.log("User Tuple:", user);

// 3. Enum
enum Role {
  Admin,
  User,
  Guest,
}
let userRole: Role = Role.User;
console.log("User Role:", userRole); // Akan output nilai enum yaitu 1 (untuk User)

// 4. Fungsi dengan Parameter Bertipe dan Return Type
function add(a: number, b: number): number {
  return a + b;
}
console.log("Add Function Result:", add(5, 10));

// 5. Optional Parameter dan Default Value
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
console.log(greet()); // Output: Hello, Guest
console.log(greet("Faisal")); // Output: Hello, Faisal

// 6. Interface untuk Objek
interface Employee {
  id: number;
  name: string;
  position?: string; // Properti opsional
}
let employee: Employee = { id: 1, name: "Faisal" };
console.log("Employee:", employee);

// 7. Class dan Object-Oriented Programming
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce(): string {
    return `Hi, my name is ${this.name}`;
  }
}

let person = new Person("Faisal");
console.log(person.introduce()); // Output: Hi, my name is Faisal

// 8. Generics dalam Fungsi
function identity<T>(value: T): T {
  return value;
}

let numberResult = identity<number>(123); // Mengembalikan number
let stringResult = identity<string>("Hello"); // Mengembalikan string

console.log("Generic Function Result (number):", numberResult);
console.log("Generic Function Result (string):", stringResult);

// 9. Menjalankan Semua di Atas
function runAllExamples() {
  console.log(`Name: ${nama}, Age: ${age}, Employed: ${isEmployed}`);
  console.log("Scores:", scores);
  console.log("User Tuple:", user);
  console.log("User Role:", userRole);
  console.log("Add Function Result:", add(5, 10));
  console.log(greet());
  console.log(greet("Faisal"));
  console.log("Employee:", employee);
  console.log(person.introduce());
  console.log("Generic Function Result (number):", numberResult);
  console.log("Generic Function Result (string):", stringResult);
}

// Memanggil fungsi untuk menjalankan semua contoh
runAllExamples();
