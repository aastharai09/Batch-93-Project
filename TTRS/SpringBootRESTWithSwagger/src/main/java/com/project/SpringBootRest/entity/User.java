package com.project.SpringBootRest.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
	public class User {
	    @Id
	    private String uname;

	 

	    private String email;

	    private String password;
	    private String dob;
	    private String gender;
	    private double phoneno;
	    
  public User() {
	        
	    }
	    
	    public User(String uname, String email, String password, String dob, String gender, double phoneno) {
			super();
			this.uname = uname;
			this.email = email;
			this.password = password;
			this.dob = dob;
			this.gender = gender;
			this.phoneno = phoneno;
		}

		public String getUname() {
			return uname;
		}

		public void setUname(String uname) {
			this.uname = uname;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getDob() {
			return dob;
		}

		public void setDob(String dob) {
			this.dob = dob;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public double getPhoneno() {
			return phoneno;
		}

		public void setPhoneno(double phoneno) {
			this.phoneno = phoneno;
		}

		@Override
		public String toString() {
			return "User [uname=" + uname + ", email=" + email + ", password=" + password + ", dob=" + dob + ", gender="
					+ gender + ", phoneno=" + phoneno + "]";
		}

		
	  
}
