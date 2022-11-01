import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, WidgetEventTypes, WindowType } from '@nodegui/nodegui';
import logo from '../assets/logox200.png';

const win = new QMainWindow();
win.setWindowTitle("Hello World");
win.setWindowFlag(WindowType.FramelessWindowHint, true);

const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

/*
Disable the following additions to the window while nodegui hasn't fixed crash after some installations ...

const label = new QLabel();
label.setObjectName("mylabel");
label.setText("Hello");

const button = new QPushButton();
button.setIcon(new QIcon(logo));

const label2 = new QLabel();
label2.setText("World");
label2.setInlineStyle(`
  color: red;
`);

rootLayout.addWidget(label);
rootLayout.addWidget(button);
rootLayout.addWidget(label2);*/
win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #myroot {
      background-color: #009688;
      height: '100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
    }
  `
);
win.show();
win.addEventListener(WidgetEventTypes.WindowActivate, () => {
  console.log('App started and loaded !');
});

(global as any).win = win;
