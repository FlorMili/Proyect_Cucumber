package com.store.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "features",
		glue= "com.store.steps",
		plugin= {
				"pretty","html:target/cucumber-reports",
				"json:target/cucumber-reports/Cucumber.json",
				"junit:target/cucumber-reports/Cucumber.xml",
		},
		dryRun = false, 
		strict = false,
		monochrome =true //para que por consola se visualice mas ordenado
		)
public class StoreRunner {

}
