package id.co.bca.librarymanagement.controller;

import id.co.bca.librarymanagement.model.BorrowerModel;
import id.co.bca.librarymanagement.repository.BorrowerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class BorrowerController {
    @Autowired
    BorrowerRepository borrowerRepository;

    @GetMapping("/borrowers")
    @ResponseStatus(HttpStatus.OK)
    public List<BorrowerModel> findAll(){
        return borrowerRepository.findAll();
    }

    @GetMapping("/borrowers/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BorrowerModel findBorrowerById(@PathVariable("id") int id){
        return borrowerRepository.findById(id).get();
    }

    @PostMapping("/borrowers")
    @ResponseStatus(HttpStatus.OK)
    public BorrowerModel addBorrower (@RequestBody BorrowerModel borrower){
        return borrowerRepository.save(borrower);
    }

    @PutMapping("/borrowers/{id}")
    @ResponseStatus(HttpStatus.OK)
    public BorrowerModel updateBorrower(@RequestBody BorrowerModel borrower, @PathVariable("id") int id){
        borrower.setId(id);
        return borrowerRepository.save(borrower);
    }

    @DeleteMapping("/borrowers/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBaby(@PathVariable("id") int id) {
        borrowerRepository.deleteById(id);
    }
}
