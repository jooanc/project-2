package com.rev.mail;

	import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
	public class JavaMailUtil {
		
	public static boolean sendMail(String email,String pass) throws MessagingException {
			
		
			//Configuring the properties fo the mail, we can put a key and a value to this properties
			System.out.println("Preparing to send mail to: "+email);
			
			final String myAccountEmail = "revature1906@gmail.com";
			final String password = "jQEDp4ssw0rd";
			
			Properties properties = new Properties();
			
			properties.put("mail.smtp.host", "smtp.gmail.com");
			properties.put("mail.smtp.port", "587");
			properties.put("mail.smtp.auth", "true");
			properties.put("mail.smtp.starttls.enable", "true"); //TLS
			
			
			//Session is part of the API
			Session session = Session.getInstance(properties, new Authenticator() {
				@Override
				protected PasswordAuthentication getPasswordAuthentication() {
					
					return new PasswordAuthentication(myAccountEmail, password);
				}
			});
			
			//Message is part of the API
			Message message = prepareMessage(session, myAccountEmail, email,pass);
			
			//Transport is part of the API
			Transport.send(message);
			System.out.println("Message sent successfully ");
			return true;
			
		}

		private static Message prepareMessage(Session session, String myAccountEmail, String email,String password) {
			
			try {
				Message message = new MimeMessage(session);
				message.setFrom(new InternetAddress(myAccountEmail));
				message.setRecipient(Message.RecipientType.TO, new InternetAddress(email));
				message.setSubject("Password Reset Request");
				message.setText("Your new temporary password is: "+ password + "." + " Please update your password.");
				//to set up html instead we use setContent
//				String html = "<h1>This is an example using html </h1><br> <h2><b>Welcome to the Java mail API</b></h2>";
//				message.setContent(html, "text/html");
				return message;
			} catch (Exception e) {
				e.printStackTrace();
				
			} 
			
			return null;
		}
	}