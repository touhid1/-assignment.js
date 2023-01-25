আজকের আলোচনার বিষয় হচ্ছে জাভাস্ক্রিপ্টের Call(), Apply() এবং Bind() মেথড কিভাবে কাজ করে। জাভাস্ক্রিপ্ট ডেভেলপার হিসাবে এই মেথডগুলো সম্পর্কে পরিষ্কার ধারণা থাকা খুব প্রয়োজন। তাই চেষ্টা করবো আজকে কিছু ইউজফুল উদারণ দিয়ে এই মেথডগুলোকে নিয়ে একটু লেখতে। আশা করি, আজকের পর থেকে এই তিনটা মেথড নিয়ে কাজ করতে কখনো সমস্যা হবে না ইনশাআল্লাহ্‌।

Call(), Apply() এবং Bind() মেথড বুঝতে হলে আপনাকে “this” সম্পর্কে পরিষ্কার ধারণা থাকতে হবে। যদি “this” নিয়ে পড়তে চান তাহলে [এখানে ক্লিক](../../basic/7.%20this-keyword) করুন।

### Call() মেথডঃ

Call() মেথড প্রথম প্যারামিটার হিসাবে “this” এর ভ্যালু সেট করে। তারপর যে প্যারামিটারগুলো থাকবে সেগুলো হবে ফাংশনের প্যারামিটার। Call() মেথড ইনডিভিজুয়াল প্যারামিটার নেয়। তাহলে এইবার কয়েকটা উদাহরণ দেখা যাক।

```js
let person = {
  name: "Saroar Hossain Shahan",
};

let getInfo = function (id) {
  return `Welcome ${this.name}, Your roll number is ${id}.`;
};

console.log(getInfo.call(person, 99)); // Welcome Saroar Hossain Shahan, Your roll number is 99.
```

উপরের কোডে আমরা দেখতে পাচ্ছি যে, getInfo() এর সাথে Call() মেথড ব্যবহার করা হয়েছে এবং Call() মেথড তার প্রথম প্যারামিটার হিসাবে “this” ভ্যালু সেট করে, যেটি হচ্ছে person অবজেক্ট। তারপরের প্যারামিটারগুলো হচ্ছে যে ফাংশনের সাথে কল হচ্ছে তার আর্গুমেন্টস। চলুন আরেকটি উদাহরণ দেখি যেটি আপনাদের রিয়েল লাইফ প্রোজেক্টে কাজে দিতে পারে।

ধরুন, আপনি Person নামে একটা ক্লাস তৈরি করলেন। এখন আপনাকে Student নামে আরেকটা ক্লাস বানাতে হবে ছাত্রদের তথ্যের জন্যে।

```js
function Person(fName, lName, age) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
}

function Student(fName, lName, age, roll, section) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
  this._roll = roll;
  this._section = section;
}

let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");

console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: 'B'
 * */
```

এখন একটি বিষয় লক্ষ্য করুন যে, আমাদের Person ক্লাসে যে কয়টা প্রোপার্টি আছে একই প্রোপার্টিগুলো আমাদের Student ক্লাসেও আছে। আচ্ছা এখন এমন যদি হত যে, Person ক্লাসের সব কয়টা প্রোপার্টি আমাদের Student ক্লাসের জন্যেও কাজ করবে। তাহলে ব্যাপারটা অনেক মজার হত তাই না? আচ্ছা দেখি কোন মতে Person ক্লাসের প্রোপার্টিগুলোকে আপনাদের জন্যে ধার করা যায় কিনা।

```js
function Person(fName, lName, age) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
}

function Student(fName, lName, age, roll, section) {
  Person.call(this, fName, lName, age, roll, section);
  this._roll = roll;
  this._section = section;
}

let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");

console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: 'B'
 * */
```

কি অনেক মজার ব্যাপার তাই না? আমাদের অনেক কোড কমে গেল। আউটপুট দেখেন সব কিছু আগের মতই আছে।

### Apply() মেথডঃ

Apply() মেথড এবং Call() মেথডের মাঝে বিশেষ কোন পার্থক্য নেই। দুটাই ফাংশনকে ইমিডিয়েটলি ইনভোক করে এবং Apply() মেথড আর্গুমেন্টস হিসাবে একটা Array নেয়।

```js
let person = {
  name: "Saroar Hossain Shahan",
};

let getInfo = function (id) {
  return `Welcome ${this.name}, Your roll number is ${id}.`;
};

console.log(getInfo.call(person, [99])); // Welcome Saroar Hossain Shahan, Your roll number is 99.
```

শুধু মাত্র কোড ছাড়া আউটপুটে কোন পার্থক্য নেই। তাহলে উপরের দ্বিতীয় উদাহরণটাও দেখি কিভাবে করা যায়।

```js
function Person(fName, lName, age) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
}

function Student(fName, lName, age, roll, section) {
  Person.apply(this, [fName, lName, age, roll, section]);
  this._roll = roll;
  this._section = section;
}

let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");

console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: 'B'
 * */
```

এখন ধরেন আপনার Student ক্লসে কয়টা প্যারামিটার হতে পারে তা আপনার জানা নেই। ঐ সমস্যার সমাধান কিভাবে করবেন? খুব সহজ একটা সমাধান আছে। আমরা জানি যে, জাভাস্ক্রিপ্টে arguments নামে একটা বিল্ড-ইন অবজেক্ট আছে। এইটা অবজেক্ট হলেও আসলে কাজ করে Array এর মত করে এবং Apply মেথড যেহেতু Array নিয়ে কাজ করে, তাহলে তো আমরা arguments অবজেক্ট দিয়েই এই কাজটি করে ফেলতে পারি খুব সহজে।

```js
function Person(fName, lName, age) {
  this._firstName = fName;
  this._lastName = lName;
  this._age = age;
}

function Student(fName, lName, age, roll, section) {
  Person.apply(this, arguments);
  this._roll = roll;
  this._section = section;
}

let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");

console.log(std1);

/**
 * output:
 * _age: 25
 * _firstName: Saroar Hossain
 * _lastName: Shahan
 * _roll: 99
 * _section: 'B'
 * */
```

আউটপুট আগের মতই দেখাচ্ছে 😀

### Bind() মেথডঃ

Bind() মেথড হচ্ছে Call() এবং Apply() মেথডের বিপরীত। কারণ Call () এবং Apply() মেথড ইমিডিয়েটলি ইনভোক করে ফেলে। কিন্তু Bind() মেথড সেটা না করে সে একটা ফাংশন ডেফিনেশন রিটার্ন করে। যা আপনি পরবর্তীতে যেকোন সময়, যেকোন জায়গায় আপনার ইচ্ছা মত ব্যবহার করতে পারবেন।

```js
let person = {
  name: "Saroar Hossain Shahan",
};

let getInfo = function (id) {
  return `Welcome ${this.name}, Your roll number is ${id}.`;
};

let boundInfo = getInfo.bind(person);

console.log(boundInfo);

/**
 * output:
 * f (id) {
 *  return `Welcome ${this.name}, Your roll number is ${id}.`;
 * }
 * */
```

আউটপুটে দেখেন boundInfo ফাংশন একটি ফাংশন ডেফিনেশন রিটার্ন করছে। এখন যদি আমরা ফাংশনটিকে তার আর্গুমেন্টস দিয়ে ইনভোক করি তাহলে আমাদের প্রত্যাশিত আউটপুট আমরা দেখতে পারবো।

```js
let person = {
  name: "Saroar Hossain Shahan",
};

let getInfo = function (id) {
  return `Welcome ${this.name}, Your roll number is ${id}.`;
};

let boundInfo = getInfo.bind(person);

console.log(boundInfo(99));
```

এই ছিল আজকের Call(), Apply() এবং Bind() মেথড নিয়ে লেখা।
