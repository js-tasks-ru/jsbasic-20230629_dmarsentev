function makeFriendsList(friends) {
  let listElement =  document.createElement("ul");
  friends.forEach(friend => {
    const li = document.createElement('li');
    li.textContent = friend['firstName'] + " " + friend['lastName'];
    listElement.appendChild(li);
  });
  return listElement;
}
