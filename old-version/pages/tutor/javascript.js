const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


const messageForm = document.querySelector(".send-container");
const messageInput = document.querySelector(".send-button");
const messagesContainer = document.querySelector(".message-container");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  // show message
  messagesContainer.innerHTML += `
  <div class='user'>
  <img src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg">
  <p>${message}</p>
  </div>
  <div class="bot">
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5189 8.63014C18.4469 8.63014 20.0098 7.14593 20.0098 5.31507C20.0098 3.48421 18.4469 2 16.5189 2C14.591 2 13.0281 3.48421 13.0281 5.31507C13.0281 7.14593 14.591 8.63014 16.5189 8.63014Z" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M27.9847 20.1657C29.9127 20.1657 31.4756 18.6695 31.4756 16.8237C31.4756 14.978 29.9127 13.4817 27.9847 13.4817C26.0568 13.4817 24.4939 14.978 24.4939 16.8237C24.4939 18.6695 26.0568 20.1657 27.9847 20.1657Z" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M16.5189 31C18.4469 31 20.0098 29.5158 20.0098 27.6849C20.0098 25.8541 18.4469 24.3699 16.5189 24.3699C14.591 24.3699 13.0281 25.8541 13.0281 27.6849C13.0281 29.5158 14.591 31 16.5189 31Z" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M4.85442 26.1487C6.79803 26.1487 8.37364 24.6645 8.37364 22.8336C8.37364 21.0028 6.79803 19.5186 4.85442 19.5186C2.91081 19.5186 1.33521 21.0028 1.33521 22.8336C1.33521 24.6645 2.91081 26.1487 4.85442 26.1487Z" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M4.85442 13.1582C6.79803 13.1582 8.37364 11.6619 8.37364 9.81614C8.37364 7.9704 6.79803 6.47412 4.85442 6.47412C2.91081 6.47412 1.33521 7.9704 1.33521 9.81614C1.33521 11.6619 2.91081 13.1582 4.85442 13.1582Z" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M16.4904 18.1712C18.0578 18.1712 19.3285 16.9766 19.3285 15.5029C19.3285 14.0293 18.0578 12.8347 16.4904 12.8347C14.923 12.8347 13.6523 14.0293 13.6523 15.5029C13.6523 16.9766 14.923 18.1712 16.4904 18.1712Z" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M7.86279 8.14482L13.0849 6.15039" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M18.988 7.71387L25.5156 14.5596" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M25.8561 19.5186L19.0447 25.3401" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M6.78394 12.5652L14.3332 25.0708" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M7.91943 24.3699L13.028 26.5799" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M6.15991 19.734L14.5606 8.14478" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M8.0896 11.1096L13.9928 14.236" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M19.3289 15.7993L24.4942 16.1766" stroke="#F4F4F4" stroke-width="2.28677"/>
<path d="M16.4905 18.1709V24.3698" stroke="#F4F4F4" stroke-width="2.28677"/>
</svg>

  <p>${message}</p>
  </div>
  `;
  // clear text box
  messageInput.value = "";
});
