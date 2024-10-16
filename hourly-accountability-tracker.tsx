import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CheckCircle, Clock, Target, User, AlertTriangle } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HourlyAccountabilityTracker() {
  const [activeTab, setActiveTab] = useState("goals")

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Hourly Accountability Tracker</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 bg-white shadow-sm">
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="goals">
          <GoalInput />
        </TabsContent>
        
        <TabsContent value="tasks">
          <TaskBreakdown />
        </TabsContent>
        
        <TabsContent value="daily">
          <DailyAccountability />
        </TabsContent>
        
        <TabsContent value="progress">
          <ProgressFeedback />
        </TabsContent>
        
        <TabsContent value="profile">
          <UserProfile />
        </TabsContent>
      </Tabs>
      
      <NotificationSystem />
    </div>
  )
}

function GoalInput() {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Set Your Big Goals</CardTitle>
        <CardDescription>Define your major objectives</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Goal Name" className="mb-4" />
        <Textarea placeholder="Brief Description" className="mb-4" />
        <Select>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button className="bg-blue-600 hover:bg-blue-700">Add Goal</Button>
      </CardFooter>
    </Card>
  )
}

function TaskBreakdown() {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Break Down Your Goals</CardTitle>
        <CardDescription>Divide your goals into manageable tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Task Name" className="mb-4" />
        <Input type="number" placeholder="Allocated Time (hours)" className="mb-4" />
        <Select className="mb-4">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Associated Goal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="goal1">Goal 1</SelectItem>
            <SelectItem value="goal2">Goal 2</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex space-x-2">
          <Button className="bg-green-600 hover:bg-green-700">Add Task</Button>
          <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">Get AI Suggestions</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function DailyAccountability() {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Daily Task Tracking</CardTitle>
        <CardDescription>Log your daily progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4 mb-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Task" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="task1">Task 1</SelectItem>
              <SelectItem value="task2">Task 2</SelectItem>
            </SelectContent>
          </Select>
          <Input type="number" placeholder="Hours Spent" />
          <Input type="number" placeholder="Completion %" />
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">Log Progress</Button>
      </CardContent>
    </Card>
  )
}

function ProgressFeedback() {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Your Progress</CardTitle>
        <CardDescription>Overall completion and suggestions</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={65} className="mb-4" />
        <p className="mb-4">You're 65% of the way there! Focus on completing Task X next.</p>
        <div className="flex items-center space-x-2 text-yellow-600">
          <AlertTriangle />
          <span>You've spent 2 hours more than planned on Task Y.</span>
        </div>
        <Button className="mt-4 bg-teal-600 hover:bg-teal-700">View AI Recovery Suggestions</Button>
      </CardContent>
    </Card>
  )
}

function UserProfile() {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">User Profile</CardTitle>
        <CardDescription>Your productivity trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <User className="text-gray-600" />
            <span>John Doe</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="text-green-600" />
            <span>5 Completed Goals</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="text-blue-600" />
            <span>Average 6 hours/day productivity</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-purple-600" />
            <span>85% Task Completion Rate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function NotificationSystem() {
  return (
    <div className="fixed bottom-4 right-4">
      <Button variant="outline" className="rounded-full bg-white shadow-lg">
        <Bell className="mr-2 text-orange-600" />
        <span className="text-gray-800">2</span>
      </Button>
    </div>
  )
}
