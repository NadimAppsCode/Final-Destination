import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-commands',
  templateUrl: 'commands.html',
})
export class CommandsPage {

  Commands = [
  {
     commandName: {name:  'Do not be rude in Speech(3:159)'}
  }, 
  {
    commandName: {name:  'Restrain Anger(3:134)'}
  },
  {
    commandName: {name:  'Be Good to Others(4:36)'}
  },
  {
    commandName: {name:  'Do not be arrogant(7:13)'}
  },
  {
    commandName: {name:  'Forgive others for their mistakes(7:199)'}
  },
  {
    commandName: {name:  'Speak to People Mildly(20:44)'}
  },
  {
    commandName: {name:  'Lower your voice(31:19)'}
  },
  {
    commandName: {name:  'Do not ridicule others(49:11)'}
  },
  {
    commandName: {name:  'Be Dutiful To Parents(17:23)'}
  },
  {
    commandName: {name:  'Do not say a word of Disrespect to Parents(17:23)'}
  },
  {
    commandName: {name:  'Do not enter parents private Room Without asking permission(24:58)'}
  },
  {
    commandName: {name:  'Write down the Debt(2:282)'}
  },
  {
    commandName: {name:  'Do not follow anyone blindly(2:170'}
  },
  {
    commandName: {name:  'Grant more time to repay if the debtor is in hard time(2:280)'}
  },
  {
    commandName: {name:  'Don’t consume interest(2:275)'}
  },
  {
    commandName: {name:  'Do not engage in Bribery(2:188)'}
  },
  {
    commandName: {name:  'Do not break the Promise(2:177)'}
  },
  {
    commandName: {name:  'Keep the Trust(2:283)'}
  },
  {
    commandName: {name:  'Do not mix the truth with Falsehood(2:42)'}
  },
  {
    commandName: {name:  'Judge with Justice between People(4:58)'}
  },
  {
    commandName: {name:  'Stand out firmly for Justice(4:135)'}
  },
  {
    commandName: {name:  'Wealth of the dead should be distributed among his family members(4:7)'}
  },
  {
    commandName: {name:  'Women also have the right for inheritance(4:7)'}
  },
  {
    commandName: {name:  'Do not devour the property of Orphans(4:10)'}
  },
  {
    commandName: {name:  'Protect Orphans(2:220)'}
  },
  {
    commandName: {name:  'Do not consume one another’s wealth unjustly(4:29)'}
  },
  {
    commandName: {name:  'Try for settlement between people(49:9)'}
  },
  {
    commandName: {name:  'Avoid Suspicion(49:12)'}
  },
  {
    commandName: {name:  'Do not spy and backbite(2:283)'}
  },
  {
    commandName: {name:  'Do not spy OR backbite(49:12)'}
  },
  {
    commandName: {name:  'Spend wealth in charity(57:7)'}
  },
  {
    commandName: {name:  'Encourage Feeding Poor(107:3)'}
  },
  {
    commandName: {name:  'Help those in need by finding them(2:273)'}
  },
  {
    commandName: {name:  'Do not spend money Extravagantly(17:29)'}
  },
  {
    commandName: {name:  'Do not invalidate Charity with reminders(2:264)'}
  },
  {
    commandName: {name:  'Honor Guests(51:26)'}
  },
  {
    commandName: {name:  'Order Righteousness to people only after practicing it yourself(2:44)'}
  },
  {
    commandName: {name:  'Order Righteousness to people only after practicing it yourself(2:44)'}
  }
         

];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandsPage');
    
  }

}
