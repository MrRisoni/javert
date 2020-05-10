package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.io.BufferedReader;
import java.io.InputStreamReader;

@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {

		try {
			String s;
			Process p;
					 p = Runtime.getRuntime().exec("df -h");
					 BufferedReader br = new BufferedReader(
							 new InputStreamReader(p.getInputStream()));
					 while ((s = br.readLine()) != null)
							 System.out.println("line: " + s);
					 p.waitFor();
					 System.out.println ("exit: " + p.exitValue());
					 p.destroy();

					 return new Greeting(counter.incrementAndGet(), String.format(template, name));

			 } catch (Exception e) {

				 return new Greeting(counter.incrementAndGet(), String.format(template, name));

			 }


	}
}
