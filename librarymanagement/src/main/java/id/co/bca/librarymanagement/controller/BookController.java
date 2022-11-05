package id.co.bca.librarymanagement.controller;

import id.co.bca.librarymanagement.model.BookModel;
import id.co.bca.librarymanagement.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class BookController {
    @Autowired
    BookRepository bookRepository;

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
    public BookModel addBook (@RequestBody BookModel book){
        return bookRepository.save(book);
    }

    @PutMapping("/books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BookModel updateBook(@RequestBody BookModel book, @PathVariable("id") int id){
        book.setId(id);
        return bookRepository.save(book);
    }

    @DeleteMapping("/books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBaby(@PathVariable("id") int id) {
        bookRepository.deleteById(id);
    }
}
