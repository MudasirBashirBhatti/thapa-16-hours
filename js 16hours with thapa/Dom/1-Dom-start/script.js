// dom methods 
// 1. find document 
console.log("...........**Find document**.........");
console.log(document);

// 2. find Head in document 
console.log("...........**Find head**.........");
console.log(document.head);

// 3. find body in document 
console.log("...........**Find body**.........");
console.log(document.body);

// 4. show only html section 
console.log("...........**Find only Html**.........");
console.log(document.documentElement);

// 5. returns the children of the body
console.log("...........**Find children**.........");
console.log(document.body.childNodes);

// 6. Returns the chlild elements of body 
console.log("...........**Find child elements of body**.........");
console.log(document.body.children);

// 6. has child node or not 
console.log("...........**if some element has child or not check**.........");
console.log(document.body.hasChildNodes());

