package id.co.bca.librarymanagement.controller;

import id.co.bca.librarymanagement.model.BookModel;
import id.co.bca.librarymanagement.model.RequestBookModel;
import id.co.bca.librarymanagement.repository.BookRepository;
import id.co.bca.librarymanagement.repository.RequestBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class BookController {
    @Autowired
    BookRepository bookRepository;

    @Autowired
    RequestBookRepository requestBookRepository;


    @GetMapping("/books")
    @ResponseStatus(HttpStatus.OK)
    public List<BookModel> findAll(){
        return bookRepository.findAll();
    }

    @GetMapping("/books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BookModel findBookById(@PathVariable("id") int id){
        return bookRepository.findById(id).get();
    }

    @PostMapping("/books")
    @ResponseStatus(HttpStatus.OK)
    public RequestBookModel addBook (@RequestBody RequestBookModel book){
        return requestBookRepository.save(book);
    }

    @PutMapping("/books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RequestBookModel updateBook(@RequestBody RequestBookModel book, @PathVariable("id") int id){
        book.setId(id);
        return requestBookRepository.save(book);
    }

    @DeleteMapping("/books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable("id") int id) {
        bookRepository.deleteById(id);
    }
}
