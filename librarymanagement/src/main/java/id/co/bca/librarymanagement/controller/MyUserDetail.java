package id.co.bca.librarymanagement.controller;

import id.co.bca.librarymanagement.model.UserModel;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;

public class MyUserDetail implements UserDetails {

    private final UserModel mUser;

    public MyUserDetail(UserModel user){
        mUser = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(mUser.getRole());
        return Arrays.asList(authority);
    }

    @Override
    public String getPassword() {
        return mUser.getPassword();
    }

    @Override
    public String getUsername() {
        return mUser.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
