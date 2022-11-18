package id.co.bca.librarymanagement.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "returnbook")
public class RequestReturnBookModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "return_date_actual")
    private Date return_date_actual;

    @Column(name = "borrowing_id")
    private int borrowing_id;

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

    public int getBorrowing_id() {
        return borrowing_id;
    }

    public void setBorrowing_id(int borrowing_id) {
        this.borrowing_id = borrowing_id;
    }
}
