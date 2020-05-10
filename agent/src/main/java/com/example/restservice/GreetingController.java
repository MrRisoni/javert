package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.util.ArrayList;
import java.util.List;


@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();


	@GetMapping("/partitions")
	public ArrayList<Partition> partiions(@RequestParam(value = "name", defaultValue = "World") String name) {

		ArrayList<Partition> partitions = new ArrayList<>();


		try {
			String dfOut;
			Process p;
					 p = Runtime.getRuntime().exec("df -h");
					 BufferedReader br = new BufferedReader(
							 new InputStreamReader(p.getInputStream()));
					 while ((dfOut = br.readLine()) != null) {
						 System.out.println("---------------");
							 System.out.println("line: " + dfOut);
String after = dfOut.trim().replaceAll(" +", " ");
							 String[] split = after.split(" ");

							 System.out.println(split);
							 System.out.println(split[3]);
							 System.out.println(split.length);

							 Partition prt = new Partition(split[0],split[1],split[2],split[3],split[4]);
							 partitions.add(prt);
						 }
					 p.waitFor();
					 System.out.println ("exit: " + p.exitValue());
					 p.destroy();

        partitions.remove(0);
					 return partitions;

			 } catch (Exception e) {
				 System.out.println("Error");
				 e.printStackTrace();
				 return partitions;

			 }


	}


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
