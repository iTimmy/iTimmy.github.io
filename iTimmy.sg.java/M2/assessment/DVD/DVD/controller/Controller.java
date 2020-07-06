package controller;

import ui.*;
import dao.*;
import dto.*;
import java.util.*;

public class Controller {

    private UserIO io = new UserIOConsoleImpl();
    private View view = new View();
    private Dao dao = new DaoFileImpl();

    public void run() throws Exception {
        int select = 0;

        select = view.display();

        switch (select) {
            case 1:
                addDVD();
                break;
            case 2:
                removeDVD();
                break;
            case 3:
                editDVD();
                break;
            case 4:
                listDVD();
                break;
            case 5:
                displayDVD();
                break;
            case 6:
                searchDVD();
                break;
            case 7:
                loadDVD();
                break;
            case 8:
                saveDVD();
                break;
            case 9:
                editAllDVD();
                break;
            case 10:
                break;
            default:
                System.out.println("what?");
        }

        termination();
    
    }



    private void addDVD() throws Exception {
        view.displayAddDVD();
        DVD newDVD = view.newDVD();
    }

    private void removeDVD() throws Exception {
        view.displayRemoveDVD();
    }

    private void editDVD() {
        view.displayEditDVD();
    }

    private void listDVD() throws Exception {
        List<DVD> dvdList = dao.getAllDVDs();
        view.displayListDVD(dvdList);
    }

    private void displayDVD() throws Exception {
        view.displayDisplayDVD();
    }

    private void searchDVD() throws Exception {
        view.displaySearchDVD();
    }

    private void loadDVD() throws Exception {
        view.displayLoadDVD();
    }

    private void saveDVD() throws Exception {
        view.displaySaveDVD();
        DVD newDVD = view.newDVD();
    }

    private void editAllDVD() {
        view.displayEditAllDVD();
    }

    private void termination() {
        view.displayTermination();
    }

}