import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  User,
  Award,
  Clock,
  TrendingUp,
  Download,
  Bell,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const StudentPortal = () => {
  const courses = [
    { code: "CS401", name: "Advanced Algorithms", progress: 75, grade: "A" },
    { code: "MATH301", name: "Linear Algebra", progress: 85, grade: "A+" },
    { code: "PHYS201", name: "Quantum Physics", progress: 60, grade: "B+" },
    { code: "ENG101", name: "Technical Writing", progress: 90, grade: "A" },
  ];

  const recentActivities = [
    { icon: FileText, text: "Assignment submitted: Data Structures Project", time: "2 hours ago" },
    { icon: Award, text: "New grade posted: Advanced Algorithms - A", time: "1 day ago" },
    { icon: Bell, text: "Reminder: Exam on Friday at 10:00 AM", time: "2 days ago" },
    { icon: BookOpen, text: "New study material uploaded: Quantum Physics Ch.5", time: "3 days ago" },
  ];

  const quickActions = [
    { icon: Calendar, title: "Class Schedule", description: "View your weekly timetable" },
    { icon: FileText, title: "Assignments", description: "Check pending tasks" },
    { icon: BookOpen, title: "Course Materials", description: "Access notes and resources" },
    { icon: Award, title: "Grades", description: "View academic performance" },
    { icon: Download, title: "Downloads", description: "Course documents and forms" },
    { icon: User, title: "Profile", description: "Update personal information" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="bg-gradient-hero rounded-lg p-8 mb-8 text-primary-foreground animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, John Doe!</h1>
                <p className="text-primary-foreground/80 text-lg">
                  Student ID: 2024CS001 | Computer Science, Year 3
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-primary-foreground/80 mb-1">Current CGPA</div>
                <div className="text-4xl font-bold">3.85</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-light p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">4</div>
                      <div className="text-sm text-muted-foreground">Active Courses</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">3</div>
                      <div className="text-sm text-muted-foreground">Pending Tasks</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-light p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">92%</div>
                      <div className="text-sm text-muted-foreground">Attendance</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Current Courses */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Current Courses
                </h2>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">
                            {course.code}: {course.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">Current Grade: {course.grade}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Course Progress: {course.progress}%
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="p-4 border border-border rounded-lg hover:shadow-md hover:border-primary transition-all text-left group"
                    >
                      <action.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold mb-1 text-foreground">{action.title}</h3>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex gap-3 pb-4 border-b border-border last:border-0">
                      <div className="bg-primary-light p-2 rounded-lg h-fit">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground mb-1">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Academic Calendar */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Events
                </h2>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-xs">DEC</div>
                        <div className="text-xl font-bold">15</div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Mid-term Exams</p>
                        <p className="text-xs text-muted-foreground">Multiple courses</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary text-secondary-foreground rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-xs">DEC</div>
                        <div className="text-xl font-bold">20</div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Project Deadline</p>
                        <p className="text-xs text-muted-foreground">Advanced Algorithms</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-xs">DEC</div>
                        <div className="text-xl font-bold">25</div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Winter Break Begins</p>
                        <p className="text-xs text-muted-foreground">Campus closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
