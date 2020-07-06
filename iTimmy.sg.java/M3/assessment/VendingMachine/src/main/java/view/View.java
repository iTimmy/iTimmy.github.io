package main.java.view;

public class View {

    private UserIO io = new UserIOImpl();

    public void display() {
        io.print("Welcome.\n" + 
        "There are " + " items.\n" +
        "Here are the following items" + 
        " you may choose from the list: \n" + 
        "or you may leave the vending machine.");

        io.print("MENU\n" +
        "1. View items\n" +
        "2. Buy item\n" +
        "3. List all items\n" +
        "4. EXIT");

        io.readInt("Please choose the number that's corresponded with your choice.");
    }



    public void displayNumOfItems() {

    }

    public void displayItems() {

    }

    public void displayCostOfItems() {

    }

    public void displayChange() {

    }

    public void displayUserMoney() {

    }

    public void displayExit() {

    }
}

/*

UserIO:
void print(String message)
double readDouble(String prompt)
double readDouble(String prompt, double min, double max)
float readFloat(String prompt)
float readFloat(String prompt, double min, double max)
int readInt(String prompt)
int readInt(String prompt, int min, int max)
long readLong(String prompt)
long readLong(String prompt, long min, long max)
String readString(String prompt)

View:
displayNumOfItems()
displayItems()
displayCostOfItems()
displayChange()
displayUserMoney()
displayExit()

DAO & Service:
numOfItems()
goneItems()
getItem()
getAllItems()
updateItems()

DTO: VendingMachine:
String itemName;
float itemCost;
float userMoney;
int numberOfItems;

*/