import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //title = 'pwdgen';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  pwd = "";

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    //GENERATE PASSWORD
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPwd = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPwd += validChars[index];
    }
    this.pwd = generatedPwd;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
