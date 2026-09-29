import React, { useState } from 'react';
import { ProjectModal, ProjectData } from './ProjectModal';
import { Code2, ArrowUpRight, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projectsData: ProjectData[] = [
    {
      id: 'voter-eligibility',
      number: '01',
      title: 'Voter Eligibility Calculator',
      category: 'Python / Logic',
      technology: 'Python',
      description:
        'A beginner Python project that determines voter eligibility based on age and demonstrates conditional logic and user input.',
      detailedOverview:
        'This project serves as a foundational building block for understanding programmatic decision-making. It takes numerical input from the user, validates that the input is a valid non-negative age, and tests conditional boundaries against legal voting age criteria.',
      keyConcepts: [
        'User input handling via Python input() function',
        'Type conversion from string to integer (int casting)',
        'If-elif-else conditional branching',
        'Boundary condition testing (age >= 18)',
        'Formatted string output (f-strings) for dynamic feedback',
      ],
      demoType: 'voter',
      pythonCode: `# Voter Eligibility Calculator
# Author: Tom Antony

def check_voter_eligibility():
    print("--- Voter Eligibility Calculator ---")
    try:
        age_input = input("Enter your age in years: ")
        age = int(age_input)
        
        if age < 0:
            print("Invalid input: Age cannot be negative.")
        elif age >= 18:
            print(f"Eligible! At {age} years old, you are legally entitled to vote.")
        else:
            years_left = 18 - age
            print(f"Not eligible yet. You need to wait {years_left} more year(s) to vote.")
    except ValueError:
        print("Error: Please enter a valid integer for age.")

if __name__ == "__main__":
    check_voter_eligibility()`,
    },
    {
      id: 'atm-management',
      number: '02',
      title: 'ATM Management System',
      category: 'Python / Application Logic',
      technology: 'Python',
      description:
        'A beginner-level ATM management project demonstrating programming logic, user interaction, transaction handling, and basic account operations.',
      detailedOverview:
        'A stateful terminal console simulation that models real banking operations. It introduces PIN verification loops, state mutation (balance adjustments), deposit/withdrawal logic, and defensive programming against overdrafts.',
      keyConcepts: [
        'State persistence across repeated user loops (while True)',
        'Defensive input validation and PIN credential verification',
        'Logical conditions preventing overdrafts & negative deposit amounts',
        'Structured modular functions for deposit, withdrawal, and balance check',
        'Clean console menu formatting and graceful exit states',
      ],
      demoType: 'atm',
      pythonCode: `# ATM Management System
# Author: Tom Antony

def run_atm():
    pin = "1234"
    balance = 5000.0
    
    print("==============================")
    print("    WELCOME TO PYTHON ATM     ")
    print("==============================")
    
    entered_pin = input("Enter your 4-digit PIN: ")
    if entered_pin != pin:
        print("Incorrect PIN. Access Denied.")
        return

    while True:
        print("\\n1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Select an option (1-4): ")
        
        if choice == "1":
            print(f"Current Balance: INR {balance:.2f}")
        elif choice == "2":
            amt = float(input("Enter deposit amount: "))
            if amt > 0:
                balance += amt
                print(f"Successfully deposited INR {amt:.2f}. New Balance: INR {balance:.2f}")
            else:
                print("Deposit amount must be positive.")
        elif choice == "3":
            amt = float(input("Enter withdrawal amount: "))
            if amt > balance:
                print(f"Insufficient funds! Available balance is INR {balance:.2f}")
            elif amt <= 0:
                print("Invalid withdrawal amount.")
            else:
                balance -= amt
                print(f"Please collect your cash: INR {amt:.2f}. Balance: INR {balance:.2f}")
        elif choice == "4":
            print("Thank you for using Python ATM. Have a great day!")
            break
        else:
            print("Invalid option. Please try again.")

if __name__ == "__main__":
    run_atm()`,
    },
    {
      id: 'student-grade',
      number: '03',
      title: 'Student Grade Calculator',
      category: 'Python / Education',
      technology: 'Python',
      description:
        'A Python project that calculates student grades based on marks and demonstrates input handling, conditional statements, and basic calculations.',
      detailedOverview:
        'Constructed to help automate score computations for students. It aggregates subject marks, calculates the cumulative percentage/average, and maps quantitative performance to corresponding qualitative academic letter grades.',
      keyConcepts: [
        'Iterative mark collection and mathematical arithmetic (summation & average)',
        'Grading ladder algorithms using nested/sequential elif logic',
        'Boundary enforcement ensuring marks strictly adhere to 0-100 range',
        'Formatted statistical output for student performance reporting',
      ],
      demoType: 'grade',
      pythonCode: `# Student Grade Calculator
# Author: Tom Antony

def calculate_grade():
    print("--- Student Grade Calculator ---")
    subjects = ["Subject 1", "Subject 2", "Subject 3"]
    scores = []
    
    for sub in subjects:
        while True:
            try:
                score = float(input(f"Enter marks for {sub} (out of 100): "))
                if 0 <= score <= 100:
                    scores.append(score)
                    break
                else:
                    print("Score must be between 0 and 100.")
            except ValueError:
                print("Please enter a valid numeric score.")
                
    total = sum(scores)
    average = total / len(scores)
    
    if average >= 90:
        grade = "A+"
    elif average >= 80:
        grade = "A"
    elif average >= 70:
        grade = "B"
    elif average >= 60:
        grade = "C"
    elif average >= 50:
        grade = "D"
    else:
        grade = "F"
        
    print("\\n----- Academic Report -----")
    print(f"Total Marks: {total} / {len(subjects) * 100}")
    print(f"Average Percentage: {average:.2f}%")
    print(f"Assigned Grade: {grade}")

if __name__ == "__main__":
    calculate_grade()`,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-900">
            Selected Works
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Small projects that represent my journey from learning concepts to building practical applications.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                  <span className="font-mono font-semibold text-slate-900">
                    PROJECT {project.number}
                  </span>
                  <span>{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology text */}
                <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-blue-900" />
                  <span>Technology: {project.technology}</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-950 transition-colors py-1 group/btn"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <span className="text-[11px] text-slate-400 font-medium">
                  Project link coming soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest statement note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Learning in Progress:</span> All projects are created as hands-on exercises to solidify core programming logic and will be published on GitHub as they are documented.
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
