let mentors= new Map([
	["Кристина Хомяк", "Куратор курса"],
	["Алина Лямзинa","Методист курса"],
	["Анна Мазалова",'Ментор раздела "Введение"'],
	["Юлия Токаревская","Ментор раздела 'Основы JavaScript'"]	
]);


mentors.forEach((value,key)=>{
	console.log(`Ключ--${key}, Значение--${value}`);});
