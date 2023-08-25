// 1
const openButton1 = document.getElementById("openButton1");
  const closeButton1 = document.getElementById("closeButton1");
  const imageContainer1 = document.getElementById("imageContainer1");
  openButton1.addEventListener("click", () => {
    var text = "We are interested in retrieving only the students' names; all the names should be in caps. ['JOHN', 'BABA', 'YAGA', 'WICK']";
    document.getElementById('text').innerHTML = text;
    const img = document.createElement("img");
    img.src = "Screenshot (173).png";
    imageContainer1.appendChild(img);
  });
  closeButton1.addEventListener("click", () => {
    imageContainer1.innerHTML = "";
    text.innerHTML = "";
  });

  //2
  const openButton2 = document.getElementById("openButton2");
  const closeButton2 = document.getElementById("closeButton2");
  const imageContainer2 = document.getElementById("imageContainer2");
  openButton2.addEventListener("click", () => {
    var text2="Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks. [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]" ;
   document.getElementById('text2').innerHTML = text2;
    const img = document.createElement("img");
    img.src = "Screenshot (174).png";
    imageContainer2.appendChild(img);
  });
  closeButton2.addEventListener("click", () => {
    imageContainer2.innerHTML = "";
    text2.innerHTML = "";
  });

  //3
  const openButton3 = document.getElementById("openButton3");
  const closeButton3 = document.getElementById("closeButton3");
  const imageContainer3 = document.getElementById("imageContainer3");
  openButton3.addEventListener("click", () => {
    var text3="Retrieve the details of students who scored more than 50 marks and have IDs greater than 120." ;
   document.getElementById('text3').innerHTML = text3;
    const img = document.createElement("img");
    img.src = "Screenshot (176).png";
    imageContainer3.appendChild(img);
  });
  closeButton3.addEventListener("click", () => {
    imageContainer3.innerHTML = "";
    text3.innerHTML = "";
  });

  //4
  const openButton4 = document.getElementById("openButton4");
  const closeButton4 = document.getElementById("closeButton4");
  const imageContainer4 = document.getElementById("imageContainer4");
  openButton4.addEventListener("click", () => {
    var text4="Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students." ;
   document.getElementById('text4').innerHTML = text4;
    const img = document.createElement("img");
    img.src = "Screenshot (178).png";
    imageContainer4.appendChild(img);
  });
  closeButton4.addEventListener("click", () => {
    imageContainer4.innerHTML = "";
    text4.innerHTML = "";
  });

  //5
  const openButton5 = document.getElementById("openButton5");
  const closeButton5 = document.getElementById("closeButton5");
  const imageContainer5 = document.getElementById("imageContainer5");
  openButton5.addEventListener("click", () => {
    var text5="This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above." ;
   document.getElementById('text5').innerHTML = text5;
    const img = document.createElement("img");
    img.src = "Screenshot (181).png";
    imageContainer5.appendChild(img);
  });
  closeButton5.addEventListener("click", () => {
    imageContainer5.innerHTML = "";
    text5.innerHTML = "";
  });

  //6
  const openButton6 = document.getElementById("openButton6");
  const closeButton6 = document.getElementById("closeButton6");
  const imageContainer6 = document.getElementById("imageContainer6");
  openButton6.addEventListener("click", () => {
    var text6="This time we are required to print the sum of marks of the students with id > 120." ;
   document.getElementById('text6').innerHTML = text6;
    const img = document.createElement("img");
    img.src = "Screenshot (183).png";
    imageContainer6.appendChild(img);
  });
  closeButton6.addEventListener("click", () => {
    imageContainer6.innerHTML = "";
    text6.innerHTML = "";
  });

  //7
  const openButton7 = document.getElementById("openButton7");
  const closeButton7 = document.getElementById("closeButton7");
  const imageContainer7 = document.getElementById("imageContainer7");
  openButton7.addEventListener("click", () => {
    var text7="This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50." ;
   document.getElementById('text7').innerHTML = text7;
    const img = document.createElement("img");
    img.src = "Screenshot (185).png";
    imageContainer7.appendChild(img);
  });
  closeButton7.addEventListener("click", () => {
    imageContainer7.innerHTML = "";
    text7.innerHTML = "";
  });

  //8
  const openButton8 = document.getElementById("openButton8");
  const closeButton8 = document.getElementById("closeButton8");
  const imageContainer8= document.getElementById("imageContainer8");
  openButton8.addEventListener("click", () => {
    var text8="Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects." ;
   document.getElementById('text8').innerHTML = text8;
    const img = document.createElement("img");
    img.src = "Screenshot (187).png";
    imageContainer8.appendChild(img);
  });
  closeButton8.addEventListener("click", () => {
    imageContainer8.innerHTML = "";
    text8.innerHTML = "";
  });
