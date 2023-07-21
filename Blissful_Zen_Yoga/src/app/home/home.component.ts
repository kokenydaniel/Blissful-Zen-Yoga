import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  timetableData: any;
  showTopUpBtn: boolean = false;

  private name: string = "";
  private email: string = "";
  private subject: string = "";
  private message: string = "";


  public get Name(): string {
    return this.name;
  }
  
  public get Email() : string {
    return this.email;
  }
  
  public get Subject() : string {
    return this.subject;
  }
  
  public get Message() : string {
    return this.message;
  }
  
  

  constructor() {
    this.timetableData = [
      {
        time: '09.00',
        monday: {
          class: 'beginner-yoga',
          title: 'Beginner Yoga',
          timeRange: '9:00 - 10:00',
          instructor: 'Emma Johnson'
        },
        tuesday: {},
        wednesday: {
          class: 'dynamic-yoga',
          title: 'Dynamic Yoga',
          timeRange: '9:00 - 10:00',
          instructor: 'Sophia Mitchell'
        },
        thursday: {},
        friday: {},
        saturday: {
          class: 'detox-yoga-streching',
          title: 'Detox Yoga & Streching',
          timeRange: '9:00 - 10:00',
          instructor: 'Sophia Mitchell'
        },
        sunday: {
          class: 'recharge-yoga',
          title: 'Recharge Yoga',
          timeRange: '9:00 - 10:00',
          instructor: 'Sophia Mitchell'
        }
      },
      {
        time: '10.00',
        monday: {},
        tuesday: {
          class: 'slow-flow',
          title: 'Slow Flow',
          timeRange: '10:00 - 11:00',
          instructor: 'Mia Adams'
        },
        wednesday: {
          class: 'tm-meditation',
          title: 'TM meditation',
          timeRange: '10:00 - 11:00',
          instructor: 'Noah Parker'
        },
        thursday: {},
        friday: {
          class: 'ashtanga',
          title: 'Ashtanga',
          timeRange: '10:00 - 11:00',
          instructor: 'Mia Addams'
        },
        saturday: {},
        sunday: {
          class: 'pilates-yoga',
          title: 'Pilates Yoga',
          timeRange: '10:00 - 11:00',
          instructor: 'Isabella Wilson'
        }
      },
      {
        time: '11.00',
        monday: {
          class: 'pilates-yoga',
          title: 'Pilates Yoga',
          timeRange: '11:00 - 12:00',
          instructor: 'Isabella Wilson'
        },
        tuesday: {
          class: 'beginner-yoga',
          title: 'Beginner Yoga',
          timeRange: '11:00 - 12:00',
          instructor: 'Emma Johnson'
        },
        wednesday: {},
        thursday: {
          class: 'dynamic-yoga',
          title: 'Dynamic Yoga',
          timeRange: '11:00 - 12:00',
          instructor: 'Sophia Mitchell'
        },
        friday: {
          class: 'tm-meditation',
          title: 'TM meditation',
          timeRange: '11:00 - 12:00',
          instructor: 'Noah Parker'
        },
        saturday: {
          class: 'ashtanga',
          title: 'Ashtanga',
          timeRange: '11:00 - 12:00',
          instructor: 'Mia Addams'
        },
        sunday: {}
      },
      {
        time: '12.00',
        monday: {
          class: 'dynamic-yoga',
          title: 'Dynamic Yoga',
          timeRange: '12:00 - 13:00',
          instructor: 'Mia Addams'
        },
        tuesday: {},
        wednesday: {
          class: 'ashtanga',
          title: 'Ashtanga',
          timeRange: '12:00 - 13:00',
          instructor: 'Mia Addams'
        },
        thursday: {
          class: 'beginner-yoga',
          title: 'Beginner Yoga',
          timeRange: '12:00 - 13:00',
          instructor: 'Emma Johnson'
        },
        friday: {},
        saturday: {
          class: 'tm-meditation',
          title: 'TM Meditation',
          timeRange: '12:00 - 13:00',
          instructor: 'Noah Parker'
        },
        sunday: {
          class: 'detox-yoga-streching',
          title: 'Detox Yoga & Streching',
          timeRange: '12:00 - 13:00',
          instructor: 'Sophia Mitchell'
        }
      }
    ];
  }

  ngOnInit() {
    setInterval(() => {
      const topUpBtn = document.getElementById("topUpBtn");
      topUpBtn!.style.display = this.showTopUpBtn ? 'block' : 'none';
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showTopUpBtn = window.scrollY > 200;
  }

  nameValue = '';
  emailValue = '';
  subjectValue = '';
  messageValue = '';
  errorName = '';
  errorEmail = '';
  errorSubject = '';
  errorMessage = '';

  onSendMessage() {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const subjectInput = document.getElementById("subject") as HTMLInputElement;
    const messageInput = document.getElementById("message") as HTMLTextAreaElement;

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const subjectValue = subjectInput.value.trim();
    const messageValue = messageInput.value.trim();

    let isValid = true;

    if (nameValue === "") {
      isValid = false;
      nameInput.classList.add("error");
      this.errorName = "Missing the name";
    } else {
      nameInput.classList.remove("error");
      this.errorName = "";
    }

    if (emailValue === "" || !this.isValidEmail(emailValue)) {
      isValid = false;
      emailInput.classList.add("error");
      this.errorEmail = "Invalid email address";
    } else {
      emailInput.classList.remove("error");
      this.errorEmail = "";
    }

    if (subjectValue === "") {
      isValid = false;
      subjectInput.classList.add("error");
      this.errorSubject = "Missing the subject";
    } else {
      subjectInput.classList.remove("error");
      this.errorSubject = "";
    }

    if (messageValue === "") {
      isValid = false;
      messageInput.classList.add("error");
      this.errorMessage = "Missing the message";
    } else {
      messageInput.classList.remove("error");
      this.errorMessage = "";
    }

    if (isValid) {
      const formContainer = document.getElementById("form-container");
      if (formContainer) {
        formContainer.innerHTML = "<p class='thank-you-message text-center fw-bold text-muted fs-3'>Thank you for your message! <br> We will be in touch soon!</p>";
      }
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

}