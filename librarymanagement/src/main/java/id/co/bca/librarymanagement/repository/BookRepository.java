package id.co.bca.librarymanagement.repository;

import id.co.bca.librarymanagement.model.BookModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookModel, Integer> {
    BookModel findBookById(Integer id);
}
