// src/components/Dashboard.tsx
import { useState } from "react";
import {
  Activity,
  BarChart4,
  Clock,
  Download,
  Home,
  Menu,
  MessageSquare,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOff,
  RefreshCcw,
  Settings,
  User,
  UserCheck,
  Users,
  X,
} from "lucide-react";

// Import UI components from their separate files
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./ui/table";

// Define Select component types and implementation
interface SelectProps {
  defaultValue?: string;
  children?: React.ReactNode;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ children, defaultValue, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <div className={`relative ${className || ""}`} {...props}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <span>{selectedValue === "all-active" ? "ALL-ACTIVE" : "Stonage Communication"}</span>
        <span className="ml-2">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
            <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.26618 11.9026 7.38064 11.95 7.49999 11.95C7.61933 11.95 7.73379 11.9026 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-input bg-popover shadow-md">
          <div className="p-1">
            <button
              className={`flex w-full items-center rounded-sm py-1.5 pl-2 pr-8 text-sm ${selectedValue === "all-active" ? "bg-accent" : ""}`}
              onClick={() => {
                setSelectedValue("all-active");
                setIsOpen(false);
              }}
            >
              ALL-ACTIVE
            </button>
            <button
              className={`flex w-full items-center rounded-sm py-1.5 pl-2 pr-8 text-sm ${selectedValue === "stonage" ? "bg-accent" : ""}`}
              onClick={() => {
                setSelectedValue("stonage");
                setIsOpen(false);
              }}
            >
              Stonage Communication
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [refreshTime, setRefreshTime] = useState("2025-02-28 12:09:44");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleRefresh = () => {
    const now = new Date();
    const formattedDate = now.toISOString().replace("T", " ").substring(0, 19);
    setRefreshTime(formattedDate);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar */}
      <div className={`bg-card border-r transition-all duration-300 ${sidebarCollapsed ? "w-16" : "w-64"}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center">
                <PhoneCall className="h-6 w-6 text-primary mr-2" />
                <span className="font-bold text-sm">XDialNetworks Admin</span>
              </div>
            )}
            {sidebarCollapsed && <PhoneCall className="h-6 w-6 text-primary mx-auto" />}
            <Button variant="ghost" size="sm" className="p-1" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              {sidebarCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </Button>
          </div>

          <div className="p-2 overflow-y-auto flex-1">
            <nav className="space-y-1">
              <Button variant="ghost" className={`w-full justify-start ${sidebarCollapsed ? "px-2" : "px-3"}`}>
                <Home className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Dashboard</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${sidebarCollapsed ? "px-2" : "px-3"}`}>
                <User className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Users</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${sidebarCollapsed ? "px-2" : "px-3"}`}>
                <BarChart4 className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Campaigns</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${sidebarCollapsed ? "px-2" : "px-3"}`}>
                <MessageSquare className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Scripts</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${sidebarCollapsed ? "px-2" : "px-3"}`}>
                <Phone className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Lists</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${sidebarCollapsed ? "px-2" : "px-3"}`}>
                <Activity className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Reports</span>}
              </Button>
              <Button variant="ghost" className={`w-full justify-start ${sidebarCollapsed ? "px-2" : "px-3"}`}>
                <Settings className="h-5 w-5 mr-2" />
                {!sidebarCollapsed && <span>Settings</span>}
              </Button>
            </nav>
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
              {!sidebarCollapsed && (
                <div className="ml-3">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@xdial.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="flex h-16 items-center px-4 md:px-6">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-6 w-6 text-primary" />
              <h1 className="text-lg font-semibold">XdialNetworks Dashboard</h1>
            </div>
            <nav className="ml-auto flex items-center gap-4">
              <Button variant="outline" size="sm" className="">
                Reports
              </Button>
              <Button variant="outline" size="sm" className="">
                Users
              </Button>
              <Button variant="outline" size="sm" className="">
                Campaigns
              </Button>
              <Button variant="outline" size="sm" className="">
                Lists
              </Button>
              <Button variant="outline" size="sm" className="">
                Admin
              </Button>
            </nav>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <div className="w-full max-w-none px-4 py-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Real-Time Main Report</h2>
                <p className="text-muted-foreground">Campaign: Stonage Communication | Dial Level: 6</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 self-end">
                <p className="text-sm text-muted-foreground">Last updated: {refreshTime}</p>
                <Button onClick={handleRefresh} size="sm" variant="outline" className="">
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <Button size="sm" variant="outline" className="">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Calls</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">69</div>
                    <PhoneCall className="h-8 w-8 text-blue-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">Current active calls in the system</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Calls Ringing</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">117</div>
                    <PhoneIncoming className="h-8 w-8 text-green-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">Calls currently ringing</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Waiting for Agents</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">0</div>
                    <Clock className="h-8 w-8 text-amber-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">Calls waiting for agents</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Calls in IVR</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">0</div>
                    <PhoneForwarded className="h-8 w-8 text-purple-500" />
                  </div>
                  <p className="text-xs text-muted-foreground">Calls in interactive voice response</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Card className="">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Agents Logged In</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-bold">23</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Agents In Calls</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-bold">18</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Agents Waiting</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-bold">1</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Agents in Dead Calls</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center gap-2">
                    <PhoneOff className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-bold">4</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Agents in Dispo</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-bold">0</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Card className="">
                <CardHeader className="">
                  <CardTitle className="">Call Statistics</CardTitle>
                  <CardDescription className="">Key performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Dialable Leads</div>
                        <div>102,533</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Calls Today</div>
                        <div>15,138</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Dropped / Answered</div>
                        <div>125 / 809</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Dropped Percent</div>
                        <div className="text-red-500 font-semibold">15.45%</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Avg Agents</div>
                        <div>23.00</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">DL Diff</div>
                        <div>9.05</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Diff</div>
                        <div>39.35%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader className="">
                  <CardTitle className="">System Status</CardTitle>
                  <CardDescription className="">Current system performance</CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Dial Level</div>
                        <div>6.000</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Trunk Shortfall</div>
                        <div>0 / 0</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Filter</div>
                        <div>ACTIVE</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Dial Method</div>
                        <div>RATIO</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Statuses</div>
                        <div>N, DC, AB, AA, A, NEW</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Order</div>
                        <div>RANDOM</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Hopper (min/auto)</div>
                        <div>3000 / 207</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Leads in Hopper</div>
                        <div>4798</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="">
              <CardHeader className="">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="">Agent Status</CardTitle>
                    <CardDescription className="">Real-time agent activity</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all-active" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="">
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Station</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Calls</TableHead>
                        <TableHead>List Name</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>SIP/1007</TableCell>
                        <TableCell>stone</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">READY</Badge>
                        </TableCell>
                        <TableCell>0:02</TableCell>
                        <TableCell>001</TableCell>
                        <TableCell>70</TableCell>
                        <TableCell>New Awais File</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>SIP/1014</TableCell>
                        <TableCell>stone</TableCell>
                        <TableCell>
                          <Badge className="bg-amber-500">QUEUE</Badge>
                        </TableCell>
                        <TableCell>0:12</TableCell>
                        <TableCell>001</TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>New Awais File</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>SIP/1019</TableCell>
                        <TableCell>stone</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">INCALL</Badge>
                        </TableCell>
                        <TableCell>0:26</TableCell>
                        <TableCell>001</TableCell>
                        <TableCell>63</TableCell>
                        <TableCell>New Awais File</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>SIP/1005</TableCell>
                        <TableCell>stone</TableCell>
                        <TableCell>
                          <Badge className="bg-red-500">DEAD</Badge>
                        </TableCell>
                        <TableCell>0:04</TableCell>
                        <TableCell>001</TableCell>
                        <TableCell>56</TableCell>
                        <TableCell>New Awais File</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>SIP/1009</TableCell>
                        <TableCell>stone</TableCell>
                        <TableCell>
                          <Badge className="bg-red-500">DEAD</Badge>
                        </TableCell>
                        <TableCell>0:17</TableCell>
                        <TableCell>001</TableCell>
                        <TableCell>57</TableCell>
                        <TableCell>New Awais File</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>SIP/1022</TableCell>
                        <TableCell>stone</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">INCALL</Badge>
                        </TableCell>
                        <TableCell>0:17</TableCell>
                        <TableCell>001</TableCell>
                        <TableCell>57</TableCell>
                        <TableCell>New Awais File</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>SIP/1025</TableCell>
                        <TableCell>stone</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">INCALL</Badge>
                        </TableCell>
                        <TableCell>0:17</TableCell>
                        <TableCell>001</TableCell>
                        <TableCell>57</TableCell>
                        <TableCell>New Awais File</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between">
                <div className="text-sm text-muted-foreground">Showing 7 of 23 agents logged in on all servers</div>
                <div className="text-sm text-muted-foreground">System Load Average: 1.90 1.84 1.66</div>
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader className="">
                <CardTitle className="">Agent Status Legend</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-red-500"></div>
                    <span className="text-sm">Agent chatting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                    <span className="text-sm">Agent in email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span className="text-sm">Agent waiting for call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Agent on call {"> "} 10 seconds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Agent on call {"> "} 1 minute</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                    <span className="text-sm">Agent paused {"> "} 10 seconds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-gray-500"></div>
                    <span className="text-sm">Agent on a dead call</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;