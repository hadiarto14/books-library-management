package id.co.bca.librarymanagement.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "returnbook")
public class ReturnBookModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "return_date_actual")
    private Date return_date_actual;

    @OneToOne
    @JoinColumn(name = "borrowing_id")
    private BorrowingModel borrowing;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getReturn_date_actual() {
        return return_date_actual;
    }

    public void setReturn_date_actual(Date return_date_actual) {
        this.return_date_actual = return_date_actual;
    }

    public BorrowingModel getBorrowing() {
        return borrowing;
    }

    public void setBorrowing(BorrowingModel borrowing) {
        this.borrowing = borrowing;
    }
}
