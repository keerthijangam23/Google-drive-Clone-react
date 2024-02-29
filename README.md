## In this react app 
In the UI one drive image and some initial folders will displayed.

## Technologies: 
   JS HTML CSS React

## Reference :
   UI Google drive.


## When user clicks on "New" button
after that when user clicks on "New" button it will create an popup on UI.

when user enter some folder name in the input which is displayed in the popup and clicks on create button it will remove that popup and creates one folder in the UI.

## when user clicks on any folder

when user clicks on any folder it will display one popup with "open","Delete","Rename","Cancel" buttons.

when user clicks on "Delete" it will delete that particular folder.

when user clicks on "Rename" it will focus the folder name text and convert it into input box with focusing ,we can type  folder name as we needed,on changing the focus on input field to place anywhere in the UI it will rename the folder name.

when user Clicks on "Cancel" button ,it will remove the popup and do nothing.

## when user clicks on any folder and also clicks on Rename text
 when user clicks on any folder it will display one popup with open,Rename,delete,cancel options when user clicks on Rename it will display one generic ModelPopup containing input box with Rename and cancel buttons.when user change the input text and enter some folder name and clicks on Rename button it will Rename the folder.

 ## when user clicks on open text
 when user clicks on open text which will appeared when user clicks on any folder,then it will navigate from one page to another page.

 ## files adding into the folders
  when user tries to open any folder it will navigate user to another page having some initial files in it.

## refactoring of code
   refacored the code for better understanding to the new perosns who see this application for the first time.Moved folder related functionalities into one component.folder functionalities means open,rename,delete. Moved sidebar related funtionalities into one SideBar component.

## changed all the components rendering styles
   In the starting of code, placed the SideBar after the MainContent component had rendered.But now SideBar has rendered first after that MainContent component rendered.

## Used the useContext hook
  To avoid duplication of props sending we here used the useContext hook and CreateContext library.Now by just importing the useContext hook in which component we need the parent props like that we can use the values,states,varibles from the parent component to child and inner child components everytime with out passing any props.




