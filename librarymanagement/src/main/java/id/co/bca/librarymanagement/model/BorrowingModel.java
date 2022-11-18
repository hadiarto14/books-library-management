package id.co.bca.librarymanagement.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "borrowing")
public class BorrowingModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "borrow_date")
    private Date borrow_date;

    @Column(name = "return_date")
    private Date return_date;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private BookModel book;

    @OneToOne(mappedBy = "borrowing")
    @JsonIgnore
    private ReturnBookModel  returnBookModel;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getBorrow_date() {
        return borrow_date;
    }

    public void setBorrow_date(Date borrow_date) {
        this.borrow_date = borrow_date;
    }

    public Date getReturn_date() {
        return return_date;
    }

    public void setReturn_date(Date return_date) {
        this.return_date = return_date;
    }

    public BookModel getBook() {
        return book;
    }

    public void setBook(BookModel book) {
        this.book = book;
    }

    public ReturnBookModel getReturnBookModel() {
        return returnBookModel;
    }

    public void setReturnBookModel(ReturnBookModel returnBookModel) {
        this.returnBookModel = returnBookModel;
    }
}
