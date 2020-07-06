package ui;

import controller.*;
import dto.*;
import java.util.*;
import java.io.*;

public class View {

    private UserIO io = new UserIOConsoleImpl();
    
    public int display() {
        io.print("Main Menu" +
        "\n1. Add DVD" +
        "\n2. Remove DVD" +
        "\n3. Edit DVD" +
        "\n4. List DVD" +
        "\n5. Display DVD" +
        "\n6. Search DVD" +
        "\n7. Load DVD" +
        "\n8. Save DVD" +
        "\n9. Edit all DVDs" +
        "\n10. TERMINATE");

        return io.readInt("Please choose: ", 1, 10);
    }



    // ### 1: ADD DVD ### //
    public void displayAddDVD() {
        io.print("\n====== ADD DVD ======");

        List<DVD> dvdList = new ArrayList<>();

        // dvdList.add("ok");
    }

    // ### 2: REMOVE DVD ### //
    public void displayRemoveDVD() throws Exception {
        io.print("\n====== REMOVE DVD ======");

        PrintWriter out = new PrintWriter(new FileWriter("DVDdata.txt"));
    
        out.println("");
        io.print("________________________\n" +
        "Successfully removed!");
    }

    // ### 3: EDIT DVD ### //
    public void displayEditDVD() {
        io.print("\n====== EDIT DVD ======");
        io.readString("Title: ");
        // user enters title and 
    }

    // ### 4: LIST DVD ### //
    public void displayListDVD(List<DVD> dvdList) {
        io.print("\n====== LIST DVD ======");

        // List<DVD> dvdList = new ArrayList<>();

        io.print("________________________\n" + 
        "Successfully listed!");
    }

    // ### 5: DISPLAY DVD ### //
    public void displayDisplayDVD() throws Exception {
        BufferedReader read = new BufferedReader(new FileReader("DVDdata.txt"));

        io.print("\n====== DISPLAY DVD ======");
        io.readString("Title: ");

        String title = io.readString("Title: ");
        DVD initDVD = new DVD(title);

        io.print(initDVD.getReleaseDate());
        io.print(initDVD.getDirectorName());
        io.print(initDVD.getRating());
        io.print(initDVD.getNotes());

        String st;
        while ((st = read.readLine()) != null) {
            System.out.println(st);
        }
    }

    // ### 6: SEARCH DVD ### //
    public void displaySearchDVD() throws Exception {
        BufferedReader read = new BufferedReader(new FileReader("DVDdata.txt"));

        io.print("\n====== SEARCH DVD ======");
        io.readString("Title: ");

        String title = io.readString("Title: ");
        DVD initDVD = new DVD(title);

        io.print(initDVD.getReleaseDate());
        io.print(initDVD.getDirectorName());
        io.print(initDVD.getRating());
        io.print(initDVD.getNotes());

        String st;
        while ((st = read.readLine()) != null) {
            System.out.println(st);
        }
    }

    // ### 7: LOAD DVD ### //
    public void displayLoadDVD() throws Exception {
        BufferedReader read = new BufferedReader(new FileReader("DVDdata.txt"));

        io.print("\n====== LOAD DVD ======");

        String title = io.readString("Title: ");
        DVD initDVD = new DVD(title);

        io.print(initDVD.getReleaseDate());
        io.print(initDVD.getDirectorName());
        io.print(initDVD.getRating());
        io.print(initDVD.getNotes());

        String st;
        while ((st = read.readLine()) != null) {
            System.out.println(st);
        }
    }

    // ### 8: SAVE DVD ### //
    public void displaySaveDVD() {
        io.print("\n====== SAVE DVD ======");
        io.readString("Title: ");
    }

    public DVD newDVD() throws Exception {
        PrintWriter out = new PrintWriter(new FileWriter("DVDdata.txt"));

        String title = io.readString("Title: ");
        String releaseDate = io.readString("Release Date: ");
        String rating = io.readString("MPAA Rating: ");
        String directorName = io.readString("Director's Name: ");
        String studio = io.readString("Studio: ");
        String notes = io.readString("Notes: ");
            DVD initDVD = new DVD(title);
            initDVD.setTitle(title);
            initDVD.setReleaseDate(releaseDate);
            initDVD.setRating(rating);
            initDVD.setDirectorName(directorName);
            //
            initDVD.setNotes(notes);
                out.println("TITLE: " + title);
                out.println("RELEASE DATE: " + releaseDate);
                out.println("RATING: " + rating);
                out.println("DIRECTOR NAME: " + directorName);
                //
                out.println("NOTES: " + notes);
                out.flush();
                out.close();

                    io.print("________________________\n" +
                    "Successfully added!");
                    
        return initDVD;

    }

    // ### 9: EDIT ALL DVD(S) ### //
    public void displayEditAllDVD() {
        io.print("\n====== EDIT DVD ======");
        io.readString("Title: ");
    }

    // ### 10: TERMINATION ### //
    public void displayTermination() {
        io.print("\nTerminating...");
    }



    // ###### VALIDATION ###### //
    public void displayValidation() {

    }

}

/* 
DVD {
private String title;
private String releaseDate;
private String directorName;
private String rating;
private String notes;
}

DTO:
getTitle()
setTitle()

getReleaseDate()
setReleaseDate()

getDirectorName()
setDirectorName()

getRating()
setRating()

getNotes()
setNotes()

addDVD()
removeDVD()
editDVD()
listDVD()
displayDVD()
searchDVD()

DAO {
    loadDVD()
    saveDVD()
    editAllDVD()
}
*/