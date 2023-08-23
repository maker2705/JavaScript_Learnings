<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <pre>                                           XMLHttpRequest: readyState property
The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in.

An XHR client exists in one of the following states:

Value	State      	                Description

0	UNSENT	                        Client has been created. open() not called yet.
1	OPENED	                        open() has been called.
2	HEADERS_RECEIVED    	        send() has been called, and headers and status are available.
3	LOADING	Downloading;            responseText holds partial data.
4	DONE	                        The operation is complete.</pre>
    <script>

       const xhr = new XMLHttpRequest();
       const reqURL= 'https://api.github.com/users/hiteshchoudhary';
        // instance of XMLHttpRequest(XHR) i.e. an object of 
        // XHR constructor
        // In JavaScript, constructor functions are used to create and initialize objects. 
        xhr.open('GET', reqURL)
        // console.log('here');
        console.log(xhr.readyState);// output: 1
        // above output is the ready state code, read the doc for readyState status codes
        xhr.onreadystatechange = () =>{
            console.log(xhr.readyState);
            const apiData = JSON.parse(xhr.responseText);
            // const apiData = (xhr.responseText);
            // the response comes from the url is mostly in the string format.
            // to convert it 
            // const apiData = JSON.parse(xhr.responseText);
            if(xhr.readyState===4){
                
                console.log(apiData);
            console.log(typeof apiData);// its type is string
            // after converting it to the JSON its type is now an object
            // so if want to access data like see the followers or id using (.) dot notation, we can't.
            // because it's not an object.
        console.log(apiData.bio);
        // will return the bio of the user. output: 
// Pursuing Btech in Computer Science and Engineering. 
// College: IEC College of Engineering and Technology.
// 2023 Graduated
const profileImage = apiData.avatar_url;
console.log(profileImage);
// will return the avatar url, i.e., the profile image of the user 
        
const profileImageContainer = document.createElement('div');
profileImageContainer.style.width='auto';
profileImageContainer.style.height='auto';
profileImageContainer.style.backgroundImage = `url(${profileImage})`;
profileImageContainer.style.backgroundSize="cover";
document.body.appendChild(profileImageContainer);



}
        } 
        // <-- OR -->
//         xhr.onreadystatechange = function() {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         console.log(this.responseText);
//     }
// };
// so the 'this' keyword behaves differently when using the arrow function
// compared to a regular function. if we use this in the arrow function the output will be 'undefined'

        
        // console.log(xhr.readyState);
        // output:
        // 2
        // 3
        // 4<-- it means that the operation is copleted now.
        xhr.send();

    </script>
</body>
</html>