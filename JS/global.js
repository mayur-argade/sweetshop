document.addEventListener('DOMContentLoaded', () => {
    // Create navbar dynamically
    const navbar = document.getElementById('navbar');
    const navItems = [
      { text: 'Home', href: 'index.html' },
      { text: 'About Us', href: 'aboutus.html' },
      { text: 'Contact Us', href: 'contactus.html' },
      { text: 'Login', href: 'login.html' },
      { text: 'Signup', href: 'signup.html' },
    ];
    
    const ul = document.createElement('ul');
    navItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.text;
      a.href = item.href;
      li.appendChild(a);
      ul.appendChild(li);
    });
    navbar.appendChild(ul);
  
    // Create menu cards dynamically
    const menuCards = document.getElementById('menu-cards');
    const cardData = [
      {
        title: 'Chocolate Cake',
        imageClass: 'card__image--chocolate',
        description: 'Rich and moist chocolate cake topped with creamy frosting. Perfect for chocolate lovers.',
      },
      {
        title: 'Strawberry Cheesecake',
        imageClass: 'card__image--cheesecake',
        description: 'Creamy cheesecake with a fresh strawberry topping. A delightful treat for a sweet and fruity flavor.',
      },
      {
        title: 'Gingerbread Cookies',
        imageClass: 'card__image--cookies',
        description: 'Spicy and sweet gingerbread cookies, perfect for any occasion. Enjoy the classic taste of gingerbread.',
      },
    ];
    
    cardData.forEach(card => {
      const li = document.createElement('li');
      li.className = 'cards__item';
      
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      
      const cardImage = document.createElement('div');
      cardImage.className = `card__image ${card.imageClass}`;
      cardDiv.appendChild(cardImage);
      
      const cardContent = document.createElement('div');
      cardContent.className = 'card__content';
      
      const cardTitle = document.createElement('div');
      cardTitle.className = 'card__title';
      cardTitle.textContent = card.title;
      cardContent.appendChild(cardTitle);
      
      const cardText = document.createElement('p');
      cardText.className = 'card__text';
      cardText.textContent = card.description;
      cardContent.appendChild(cardText);
      
      const cardButton = document.createElement('button');
      cardButton.className = 'btn btn--block card__btn';
      cardButton.textContent = 'Order Now';
      cardContent.appendChild(cardButton);
      
      cardDiv.appendChild(cardContent);
      li.appendChild(cardDiv);
      menuCards.appendChild(li);
    });
  
    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      
      if (!name) {
        alert('Name is required');
        return;
      }
      
      if (!email) {
        alert('Email is required');
        return;
      }
      
      if (!message) {
        alert('Message is required');
        return;
      }
      
      // Simulate form submission
      alert('Form submitted successfully');
      form.reset();
    });
  });
  