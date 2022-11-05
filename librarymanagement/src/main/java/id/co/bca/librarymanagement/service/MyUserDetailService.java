package id.co.bca.librarymanagement.service;

import id.co.bca.librarymanagement.controller.MyUserDetail;
import id.co.bca.librarymanagement.model.UserModel;
import id.co.bca.librarymanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class MyUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user = userRepository.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("No user found!");
        }
        return new MyUserDetail(user);
    }
}
