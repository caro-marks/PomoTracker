# """ importing tkinter """
# from tkinter import *  # stardard binding to Tk
# from tkinter import ttk  # theme widgets tkinter submodule


# class SecondToMeters:
# 	def __init__(self, root):
# 		""" setting up the main application window """
# 		root.title("Seconds to Hours")

# 		""" creating content frame """
# 		mainframe = ttk.Frame(root, padding="3 3 12 12")
# 		mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
# 		root.columnconfigure(0, weight=1)
# 		root.rowconfigure(0, weight=1)

# 		""" creating entry widget """
# 		self.second = StringVar()
# 		second_entry = ttk.Entry(mainframe, width=7, textvariable=self.second)
# 		second_entry.grid(column=2, row=1, sticky=(W, E))

# 		""" creating remaining widgets """
# 		self.hours = StringVar()
# 		ttk.Label(mainframe, textvariable=self.hours).grid(column=2, row=2, sticky=(W, E))

# 		ttk.Button(mainframe, text="Calculate", command=self.calculate).grid(
# 				column=3, row=3, sticky=W
# 		)

# 		ttk.Label(mainframe, text="seconds").grid(column=3, row=1, sticky=W)
# 		ttk.Label(mainframe, text="is equivalent to").grid(column=1, row=2, sticky=E)
# 		ttk.Label(mainframe, text="hours").grid(column=3, row=2, sticky=W)

# 		""" some polish """
# 		for child in mainframe.winfo_children():
# 				child.grid_configure(padx=5, pady=5)

# 		second_entry.focus()
# 		root.bind("<Return>", self.calculate)

# 	def calculate(self, *args):
# 			try:
# 					value = float(self.second.get())
# 					self.hours.set(int(value / (3600)))
# 			except ValueError:
# 					pass


# """ start event loop """
# root = Tk()
# SecondToMeters(root)
# root.mainloop()
